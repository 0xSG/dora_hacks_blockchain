import socket
import sys
import os

host= str(input('Enter the host:'))
port = int(input("Enter port:"))

global conn,sock

sock = socket.socket()
sock.bind((host,port))
sock.listen(5)
print("Listening on:"+host+":"+str(port))
conn,addr=sock.accept()
print("Connection From:"+str(addr[0])+":"+str(addr[1]))
str1='Welcome'
conn.send(str1)
while True:
        msg=str(input("Server>"))
        conn.send(msg.encode())
        data = conn.recv(2048)
        print("Client>"+data.decode())
conn.close()
sock.close()