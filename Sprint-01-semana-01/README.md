# Estudos da semana 1.

Nesta primeira semana, consegui fortalecer ainda mais minha base com git, github, e também aprender ainda mais sobre a metodologia Scrum.

## Scrum

Estudando sobre o Scrum durante a semana, relembrei como funcionava minuciosamente esta metodologia. Já tive a oportunidade de trabalhar com ela antes, e sempre gostei muito de como lidamos com nossas demandas com o passar das semanas.

Uma frase que relembrei enquanto estudava: no Scrum, antes de fazer ágil, você precisa ser ágil. Tudo é um mindset.

## Git

Com o passar da semana, tive a oportunidade de aprender ainda mais sobre essa ferramenta. Tive algumas dificuldades para relembrar desses comandos, que mesmo sendo utilizados por mim já por um bom tempo, ainda me fogem um pouco da cabeça. Em momentos assim, tento ser lógico e relacionar palavras que lembro com a ação que desejo fazer no momento.

Queria destacar um comando interessante:
```bash
git stash
```
ou
```bash
git stash save "message"
```

Esse comando permite que você armazene arquivos que ainda não estão prontos em stash, isto é, numa espécie de armazenamento temporário, onde você pode adicionar no seu repositório e apagá-lo do armazenamento, adicionar e deixar uma cópia dele no armazenamento, ou apagá-lo de lá. Também dá para listar todos os arquivos em stash.

## Github

No curso que nos foi apresentado, aprendemos coisas muito importantes para nos ajudar no versionamento de nosso projetos. Também já tenho uma boa vivência com o github, mas tive a oportunidade de reforçar o meu conhecimento, especialmente na parte de pull requests e forks.

# Conclusão

Os cursos me ajudaram muito a reforçar conceitos que já eram antigos em minha memória, e com a prática constante durante os estudos, com certeza estão mais consolidados.

Foi uma semana bem proveitosa, foram ótimos cursos para nós apresentados, e espero muito dos próximos conteúdos!

### Principais códigos aprendidos durante a semana

| Comando | Descrição |
| :----------: | :---------: |
| `git init` | Inicializar um repositório |
| `git add .` | Adicionar todos os arquivos no repositório |
| `git add file-name` | Adicionar um arquivo específico no repositório |
| `git rm file-name` | Remover um arquivo no repositório |
| `git reflog` | Listar todas as alterações do repositório e seus hashs |
| `git reset --hard (hash do commit)` | Voltar para um commit específico |
| `git log` | Listar todos os commits e seus IDs |
| `git cherry-pick (id do commit)` | Adicionar um commit específico para uma branch |
| `git checkout -b (nome da branch)` | Criar uma nova branch e mudar para ela |
| `git checkout (nome da branch)` | Mudar para uma branch já existente |
| `git branch` | Listar todas as branchs do repositório |
| `git merge (nome da branch)` | Juntar uma branch com a outra |
| `git stash` | Armazenar alterações num storage temporário |
| `git stash list` | Listar as alterações em stash |
| `git stash apply` | Adicionar as alterações do stash e remover do storage |
| `git stash drop` | Remover as alterações do stash |