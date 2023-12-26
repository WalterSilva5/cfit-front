#PAGE GENERATOR

Essa aplicação tem como objetivo criar paginas automaticamente a partir de modelos pŕe configurados utilizando geradores de codigo


o script deve solicitar:
- nome do modulo, caso sejam multiplas palavras devem ser adicionados no formato separado por - 
exemplo: NomeDoModulo deve ser adicionado como nome-do-modulo
- endpoint correspondente da api
- titulo da pagina de listagem

##o script deve sobrescrever os valores correspondentes nos arquivos de template
##o script deve adicionar os endpoints no arquivo src/routes/index.tsx substituindo o trecho {/* replace_with_new_route */} por       <Route path="template">
        <Route path="/template" element={<TemplateListing />} />
        <Route path="/template/new" element={<TemplateForm />} />
        <Route path="/template/:id" element={<TemplateForm />} />
      </Route>
