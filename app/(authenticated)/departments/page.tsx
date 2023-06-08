'use client'
import DepartmentTable from "./department_table";
import {dehydrate} from "@tanstack/react-query";
import Hydrate from "../../../components/hydrate.client";
import getQueryClient from "../../../components/get_query_client";
import {User} from "../../../requests/hr_service/types";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return (await res.json()) as User[];
}

export default async function Page() {
    // const departments = await readDepartments()
    // const {data, isLoading, isFetching, error} = useQuery({
    //     queryKey: ["hydrate-users"],
    //     queryFn: () => Promise.resolve([]),
    // });
    // console.log(data)
      const users = await getUsers();

    // const queryClient = getQueryClient();
    // await queryClient.prefetchQuery(["hydrate-users"], getUsers);
    // const dehydratedState = dehydrate(queryClient);

    return (
        // <Hydrate state={dehydratedState}>
            <DepartmentTable users={users}>
                {/*{isLoading && <h1>loading</h1>}*/}
                {/*{isFetching && <h1>isFetching</h1>}*/}
                {/*{data && data.map(department => (*/}
                {/*    <DepartmentCard key={department.title} department_title={department.title}/>*/}
                {/*))}*/}
            </DepartmentTable>
        // </Hydrate>
    )

}