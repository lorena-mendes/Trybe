# 1- Crie um algoritmo não recursivo para contar quantos
# números pares existem em uma sequência numérica (1 a n).


def conta_pares(n):
    numero_de_pares = 0
    for num in range(n + 1):
        if num % 2 == 0 and num != 0:
            numero_de_pares += 1
    return numero_de_pares


print(conta_pares(5))


# 2- Transforme o algoritmo criado acima em recursivo.
def conta_pares(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + conta_pares(n - 1)
    else:
        return conta_pares(n - 1)


print(conta_pares(5))


# 3- Crie um algoritmo recursivo que encontre, em uma lista,
# o maior número inteiro.
def maiorinteiro_aux(lista, tamanho):
    if tamanho == 1:
        return lista[0]
    else:
        maior_do_resto_da_lista = maiorinteiro_aux(lista, tamanho - 1)
        if maior_do_resto_da_lista > lista[tamanho - 1]:
            return maior_do_resto_da_lista
        else:
            return lista[tamanho - 1]


def maiorinteiro(lista):
    tamanho = len(lista)
    return maiorinteiro_aux(lista, tamanho)


print(maiorinteiro([1, 21, 300, 4, 57]))

# 4- Escreva um algoritmo recursivo para encontrar o máximo divisor comum (mdc)
# de dois inteiros.
