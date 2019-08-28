//imports

from threading import Thread
from time      import sleep
from dotenv    import load_dotenv
from sys       import exit
from bottle    import get, post, run, request

import requests
import os

load_dotenv()

port          = 3000

@post('/pokerwars.io/notifications')

@get('/pokerwars.io/ping')
// Add the missing method here

@post('/pokerwars.io/play')

run(host='0.0.0.0', port=port)