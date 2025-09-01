import frappe
import pandas as pd
from urllib.parse import urljoin  # Import urljoin to construct URLs safely
from urllib.parse import quote  # Import the quote function for URL encoding
from frappe.model.document import Document
import json

class BondFacility(Document):
    pass