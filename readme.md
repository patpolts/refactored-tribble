# Instalação  
> Clonar repositório:   
 * `git clone https://github.com/patpolts/refactored-tribble.git`  
> Instalar dependências:   
 * `yarn`  
> Rodar desenvolvimento:  
 * `yarn dev`  
> Buildar produção:  
 * `yarn build`  
> Rodar produção:  
 * `yarn start`  
> Rodar testes:  
 * `yarn test`  

# Ambiente desenvolvimento  
* Usar padrão git flow [https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow]  
 > Desenvolvimento de nova feature:  
 * Iniciar nova feature:  
   `git flow feature start nome_feature`  
 * Finalizar nova feature:  
   `git flow feature finish  nome_feature`  
 > Preparar pra subir:  
 * Iniciar release:  
   `git flow release start '0.0.0'`  
 * Finalizar release:  
   `git flow release finish`  
 * Enviar laterações:  
   `git push origin branch`
