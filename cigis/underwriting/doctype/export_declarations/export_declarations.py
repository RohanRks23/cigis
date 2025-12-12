import frappe
import pandas as pd
from urllib.parse import urljoin, quote
from frappe.model.document import Document
import json

class ExportDeclarations(Document):
    
    
    @frappe.whitelist()
    def extractData(self):

        # Check if self.upload is not None before encoding
        if self.upload1:
            encoded_path = quote(self.upload1.encode(), safe='') 
        else:
            # Handle the case where self.upload is None
            frappe.log_error("self.upload1 is None", "extractData")
            return []

        # Construct the full URL using urljoin for safe URL construction
        base_url = 'http://102.37.140.103/'
        Xl_Url = urljoin(base_url, encoded_path)
        
        try:
            xl = pd.ExcelFile(Xl_Url)

            
            sheet_name = 'Sheet1'
            df = xl.parse(sheet_name)
            df = df.dropna(how='all')
            data = []
            for index, row in df.iterrows():
                data.append({'No': row[0], 'Buyer': row[1],'Terms of Payment': row[2],'Exchange Rate': row[3],'FX Value': row[4],'Pula': row[5]})
            
            return df.to_dict(orient='records')
            
        except Exception as e:
            # Log the error instead of printing
            frappe.log_error(f"Error loading Excel file: {str(e)}", "extractData")
            # Return an empty list or None to indicate failure
            return []
            