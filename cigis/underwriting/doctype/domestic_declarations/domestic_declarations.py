import frappe
import pandas as pd
from urllib.parse import urljoin, quote
from frappe.model.document import Document

class DomesticDeclarations(Document):
    
    @frappe.whitelist()
    def extractData1(self):

        # Check if self.upload is not None before encoding
        if self.upload1:
            encoded_path = quote(self.upload1.encode(), safe='') 
        else:
            # Handle the case where self.upload is None
            frappe.log_error("self.upload is None", "extractData1")
            return []

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
                data.append({'No': row[0], 'Buyer': row[1],'Current': row[2],'30Days': row[3],'60Days': row[4],'90Days': row[5],'120Days': row[6],'Credit Days':row[7]})
            
            return df.to_dict(orient='records')
            
        except Exception as e:
            # Log the error instead of printing
            frappe.log_error(f"Error loading Excel file: {str(e)}", "extractData1")
            # Return an empty list or None to indicate failure
            return []

    @frappe.whitelist()
    def extractData(self):

        # Check if self.upload is not None before encoding
        if self.upload:
            encoded_path = quote(self.upload.encode(), safe='') 
        else:
            # Handle the case where self.upload is None
            frappe.log_error("self.upload is None", "extractData1")
            return []

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
                data.append({'No': row[0], 'Buyer': row[1],'Current': row[2],'30Days': row[3],'60Days': row[4],'90Days': row[5],'120Days': row[6],'Credit Days':row[7]})
            
            return df.to_dict(orient='records')
            
        except Exception as e:
            # Log the error instead of printing
            frappe.log_error(f"Error loading Excel file: {str(e)}", "extractData1")
            # Return an empty list or None to indicate failure
            return []
