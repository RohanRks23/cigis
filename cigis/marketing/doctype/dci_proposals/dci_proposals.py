# import frappe
# import pandas as pd
# from urllib.parse import urljoin  # Import urljoin to construct URLs safely
# from urllib.parse import quote  # Import the quote function for URL encoding
# from frappe.model.document import Document
# import json

# class DCIProposals(Document):
    
    
#     @frappe.whitelist()
#     def extractData(self):

# console.log(str(Hello))
#         # URL encode the file path to handle spaces and special characters
#         encoded_path = quote(self.upload, safe='') 
        
#         # Construct the full URL using urljoin for safe URL construction
#         base_url = 'http://102.37.140.103/'
#         Xl_Url = urljoin(base_url, encoded_path)
        
#         try:
#             xl = pd.ExcelFile(Xl_Url)
#             frappe.msgprint("HI")
            
#             sheet_name = 'Sheet1'
#             df = xl.parse(sheet_name)
#             df = df.dropna(how='all')
#             data = []
#             for index, row in df.iterrows():
#                 data.append({'No': row[0], 'Buyer': row[1],'Current': row[2],'30Days': row[3],'60Days': row[4],'90Days': row[5],'120Days': row[6]})
                
#             frappe.msgprint(str(data))
#             return data

            
#         except Exception as e:
#             frappe.msgprint(f"Error loading Excel file: {str(e)}")


import frappe
import pandas as pd
from urllib.parse import urljoin, quote
from frappe.model.document import Document
import json

class DCIProposals(Document):
    
    @frappe.whitelist()
    def extractData(self):
        frappe.msgprint("Hello")  # or print("Hello")

        # URL encode the file path to handle spaces and special characters
        encoded_path = quote(self.upload, safe='') 
        
        # Construct the full URL using urljoin for safe URL construction
        base_url = 'http://102.37.140.103/'
        Xl_Url = urljoin(base_url, encoded_path)
        
        try:
            xl = pd.ExcelFile(Xl_Url)
            frappe.msgprint("HI")
            
            sheet_name = 'Sheet1'
            df = xl.parse(sheet_name)
            df = df.dropna(how='all')
            
            data = []
            for index, row in df.iterrows():
                data.append({
                    'No': row[0],
                    'Buyer': row[1],
                    'Current': row[2],
                    '30Days': row[3],
                    '60Days': row[4],
                    '90Days': row[5],
                    '120Days': row[6]
                })
                
            frappe.msgprint(str(data))
            return data

        except Exception as e:
            frappe.msgprint(f"Error loading Excel file: {str(e)}")
