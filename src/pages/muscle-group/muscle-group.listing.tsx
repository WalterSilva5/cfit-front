import { useRoleAccess } from "@/utils/verify-role-access";
import { Role } from "@/enums/role.enum";
import { DataTable, HeaderProps } from "@/components/listing/listing-table.component";
import { FormActions } from '@/enums/form-actions.enum';
import { AppApiProvider } from "@/providers/app-api.provider";
import { useCallback, useEffect, useState } from "react";

export function MuscleGroupListing() {
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
  const [muscleGroups, setMuscleGroups] = useState([]);

  const getMuscleGroups = useCallback(async () => {
    try {
      const response = await api.makeHttpRequest({
        url: '/muscle-group',
        method: 'GET'
      });
      console.log(response);
      // setMuscleGroups(response);
      setMuscleGroups(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [api]);

  useEffect(() => {
    getMuscleGroups();
  }, [getMuscleGroups]);

  useRoleAccess([Role.ADMIN, Role.USER, Role.MANAGER]);

  return (
    <>
      <DataTable
        data={muscleGroups}
        headers={headers}
        actions={actions}
        title="Grupos Musculares"
        addNew={true}
        module="muscle-group"
      />
    </>
  );
}

export default MuscleGroupListing;
