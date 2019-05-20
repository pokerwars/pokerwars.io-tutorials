//imports

from threading import Thread
from time      import sleep
from sys       import exit
from bottle    import get, post, run, request

import requests

port          = 8090

@post('/pokerwars.io/notifications')

@get('/pokerwars.io/ping')

@post('/pokerwars.io/play')


run(host='0.0.0.0', port=port)