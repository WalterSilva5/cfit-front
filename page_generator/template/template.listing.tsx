import { useRoleAccess } from "@/utils/verify-role-access";
import { Role } from "@/enums/role.enum";
import { DataTable, HeaderProps } from "@/components/listing/listing-table.component";
import { FormActions } from '@/enums/form-actions.enum';
import { AppApiProvider } from "@/providers/app-api.provider";
import { useCallback, useEffect, useState } from "react";

export function TemplateListing() {
  const headers: HeaderProps[] = [
    { displayText: "Nome", value: "name" },
    { displayText: "Criado em", value: "createdAt" },
    { displayText: "Atualizado em", value: "updatedAt" },
    { displayText: "Ações", value: "actions", css: {
      textAlign: 'center',
    } },
  ];
  const actions = [FormActions.EDIT, FormActions.DELETE];

  const api = new AppApiProvider();
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    try {
      const response = await api.makeHttpRequest({
        url: '/template',
        method: 'GET'
      });
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [api]);

  useEffect(() => {
    getData();
  }, [getData]);

  useRoleAccess([Role.ADMIN, Role.USER, Role.MANAGER]);

  return (
    <>
      <DataTable
        data={data}
        headers={headers}
        actions={actions}
        title="Templates"
        addNew={true}
        module="template"
      />
    </>
  );
}

export default TemplateListing;
