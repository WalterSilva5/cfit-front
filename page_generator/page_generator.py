import os
import re
import shutil

def camel_to_kebab(name):
    return '-'.join(re.findall('[A-Z][^A-Z]*', name)).lower()

def read_and_replace_content(file_path, module_name, kebab_module_name):
    with open(file_path, 'r') as file:
        content = file.read()

    content = content.replace('template', kebab_module_name)
    content = content.replace('Template', module_name)
    return content

def insert_new_route(content, module_name, kebab_module_name):
    new_route = [
        f'      <Route path="{kebab_module_name}">',
        f'        <Route path="/{kebab_module_name}" element={{<{module_name}Listing/>}}/>',
        f'        <Route path="/{kebab_module_name}/new" element={{<{module_name}Form/>}}/>',
        f'        <Route path="/{kebab_module_name}/:id" element={{<{module_name}Form/>}}/>',
        f'      </Route>',
        '      {/* replace_with_new_route */}'
    ]

    lines = content.split('\n')
    for i, line in enumerate(lines):
        if '{/* replace_with_new_route */}' in line:
            lines[i:i+1] = new_route
            break

    return '\n'.join(lines)
def add_imports_to_routes_file(content, module_name, kebab_module_name):
    new_import = f"import {{ {module_name}Listing, {module_name}Form }} from '@/pages/{kebab_module_name}';\n"
    lines = content.split('\n')
    for i, line in enumerate(lines):
        if '// add_import_routes' in line:
            lines.insert(i, new_import)
            break

    return '\n'.join(lines)

def create_index_file(module_name, kebab_module_name, new_dir):
    index_content = f"export {{ {module_name}Listing }} from './{kebab_module_name}.listing';\n"
    index_content += f"export {{ {module_name}Form }} from './{kebab_module_name}.form';\n"

    with open(os.path.join(new_dir, 'index.ts'), 'w') as file:
        file.write(index_content)

def main():
    module_name = input("Digite o nome do módulo (ex: NomeDoModulo): ").title()
    kebab_module_name = camel_to_kebab(module_name)
    new_dir = os.path.join('..', 'src', 'pages', kebab_module_name)
    if os.path.exists(new_dir):
        print("\033[91mErro: O módulo", module_name, "já existe.\033[0m")
        return

    listing_content = read_and_replace_content('template/template.listing.tsx', module_name, kebab_module_name)
    form_content = read_and_replace_content('template/template.form.tsx', module_name, kebab_module_name)

    with open('../src/routes/index.tsx', 'r') as routes_file:
        routes_content = routes_file.read()
    routes_content = add_imports_to_routes_file(routes_content, module_name, kebab_module_name)
    routes_content = insert_new_route(routes_content, module_name, kebab_module_name)

    new_dir = os.path.join('..', 'src', 'pages', kebab_module_name)
    os.makedirs(new_dir, exist_ok=True)

    create_index_file(module_name, kebab_module_name, new_dir)


    with open(os.path.join(new_dir, f'{kebab_module_name}.listing.tsx'), 'w') as file:
        file.write(listing_content)
    with open(os.path.join(new_dir, f'{kebab_module_name}.form.tsx'), 'w') as file:
        file.write(form_content)
    with open('../src/routes/index.tsx', 'w') as file:
        file.write(routes_content)

    print(f"Script concluído. Módulo {module_name} adicionado.")

if __name__ == "__main__":
    main()
