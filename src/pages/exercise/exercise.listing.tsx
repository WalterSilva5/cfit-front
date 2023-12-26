import { useRoleAccess } from "@/utils/verify-role-access";
import { Role } from "@/enums/role.enum";
import { DataTable, HeaderProps } from "@/components/listing/listing-table.component";
import { FormActions } from '@/enums/form-actions.enum';
import { AppApiProvider } from "@/providers/app-api.provider";
import { useCallback, useEffect, useState } from "react";

export function ExerciseListing() {
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
  const [exercises, setExercises] = useState([]);

  const getExercises = useCallback(async () => {
    try {
      const response = await api.makeHttpRequest({
        url: '/exercise',
        method: 'GET'
      });
      setExercises(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [api]);

  useEffect(() => {
    getExercises();
  }, [getExercises]);

  useRoleAccess([Role.ADMIN, Role.USER, Role.MANAGER]);

  return (
    <>
      <DataTable
        data={exercises}
        headers={headers}
        actions={actions}
        title="Exercícios"
        addNew={true}
        module="exercise"
      />
    </>
  );
}

export default ExerciseListing;
