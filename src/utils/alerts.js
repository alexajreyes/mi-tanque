import Swal from 'sweetalert2'

export const validationAlert = message => {
  return Swal.fire({
    icon: 'error',
    title: 'Completa los campos',
    text: message,
  })
}

export const successAlert = message => {
  return Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: message,
    showConfirmButton: false,
    timer: 1500,
  })
}
