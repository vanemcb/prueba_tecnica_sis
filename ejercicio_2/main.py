#!/usr/bin/python3

desbloqueo = __import__('0-lockcaja').desbloqueo
caja = [[1], [2], [3], [4], []]
print(desbloqueo(caja))
caja = [[1, 4, 6], [2], [0, 4, 1], [5, 6, 2], [3], [4, 1], [6]]
print(desbloqueo(caja))
caja = [[1, 4], [2], [0, 4, 1], [3], [], [4, 1], [5, 6]]
print(desbloqueo(caja))
