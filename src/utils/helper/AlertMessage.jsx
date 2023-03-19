import Swal from "sweetalert2"
export const AlertMessage = async () => {
    const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Delete'
    }).then((result) => {
        return result
    })
    return result
}

export const Message = async (icon: 'error' | "success" | "warning", title: string) => {
    const result = await Swal.fire({
        icon: icon,
        title: title
    })
    return result
};