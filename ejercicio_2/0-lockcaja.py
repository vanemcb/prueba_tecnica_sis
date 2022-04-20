#!/usr/bin/python3

def desbloqueo(cajas):
    """Función que revisa si todas las cajas pueden ser desbloqueadas"""
    dict_cajas = {0: "open"}
    for i in range(1, len(cajas)):
        dict_cajas[i] = "locked"

    for x in cajas:
        for index, caja in enumerate(cajas):
            if dict_cajas[index] == "open":
                for key in caja:
                    dict_cajas[key] = "open"

    cont = 0
    for value in dict_cajas.values():
        if value == "open":
            cont += 1

    if cont == len(dict_cajas):
        return True
    else:
        return False
