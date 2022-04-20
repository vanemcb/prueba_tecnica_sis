#!/usr/bin/python3

#Inicialización de variables
n = int(input("Numero de entrada: "))
size = (2 * n) - 1
low = 0
high = size - 1
value = n

#Creación de array para llenar con el patrón
array = [[0 for i in range(size)] for x in range(size)]

#Ciclo para llenar el array
for i in range(n):
    #Para llenar el array se divide el proceso en 4 partes
    for x in range(low, high + 1):
        array[i][x] = value
    for x in range(low + 1, high + 1):
        array[x][i] = value
    for x in range(low + 1, high + 1):
        array[high][x] = value
    for x in range(low + 1, high):
        array[x][high] = value
    low += 1
    high -= 1
    value -= 1

#Imprimir el patrón
for i in range(size):
    for x in range(size):
        print(array[i][x], end=" ")
    print()
