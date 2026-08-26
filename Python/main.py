from soma import soma
from subtracao import subtracao
from divisao import divisao
from multiplicacao import multiplicacao


ROSA = "\033[95m"
RESET = "\033[0m"


print(f"{ROSA}=== CALCULADORA ==={RESET}")

print(f"\n{ROSA}Escolha a operação:{RESET}")
print(f"{ROSA}1 - Soma{RESET}")
print(f"{ROSA}2 - Subtração{RESET}")
print(f"{ROSA}3 - Divisão{RESET}")
print(f"{ROSA}4 - Multiplicação{RESET}")

opcao = input(f"{ROSA}Digite a opção: {RESET}")

num1 = float(input(f"{ROSA}Digite o primeiro número: {RESET}"))
num2 = float(input(f"{ROSA}Digite o segundo número: {RESET}"))

if opcao == "1":
    resultado = soma(num1, num2)

elif opcao == "2":
    resultado = subtracao(num1, num2)

elif opcao == "3":
    try:
        resultado = divisao(num1, num2)
    except ValueError as erro:
        print(f"{ROSA}{erro}{RESET}")
        exit()

elif opcao == "4":
    resultado = multiplicacao(num1, num2)

else:
    print(f"{ROSA}Opção inválida!{RESET}")
    exit()


print(f"\n{ROSA}Resultado: {resultado}{RESET}")