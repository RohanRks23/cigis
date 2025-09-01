import frappe
import pandas as pd
from urllib.parse import urljoin  # Import urljoin to construct URLs safely
from urllib.parse import quote  # Import the quote function for URL encoding
from frappe.model.document import Document
import json

class ExportDeclarations(Document):
    
    
    @frappe.whitelist()
    def extractData(self):

        # URL encode the file path to handle spaces and special characters
        encoded_path = quote(self.upload1, safe='') 
        
        # Construct the full URL using urljoin for safe URL construction
        base_url = 'http://cigis.sais-erp.com/'
        Xl_Url = urljoin(base_url, encoded_path)
        
        try:
            xl = pd.ExcelFile(Xl_Url)

            
            sheet_name = 'Sheet1'
            df = xl.parse(sheet_name)
            df = df.dropna(how='all')
            data = []
            for index, row in df.iterrows():
                data.append({'No': row[0], 'SlNo': row[1],'Buyer': row[2],'TermsofPayment': row[3],'ExhangeRate': row[4],'FXValue': row[5]})
            

            return data

            
        except Exception as e:
            frappe.msgprint(f"Error loading Excel file: {str(e)}")


