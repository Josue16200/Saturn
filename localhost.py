import http.server
import socketserver

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("Servidor rodando em http://192.168.56.1:{}/public/index.html".format(PORT))
    httpd.serve_forever()