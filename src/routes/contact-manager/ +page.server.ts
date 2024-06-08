import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const formData = request.formData();
        console.log(JSON.stringify(formData));
        return  {
            status: 200
        }
    }
}