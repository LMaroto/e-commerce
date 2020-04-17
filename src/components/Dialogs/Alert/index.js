import Swal from 'sweetalert2';

import './styles.css';

export const Confirm = Swal.mixin({
  customClass: {
    confirmButton: 'confirm-btn',
    cancelButton: 'cancel-btn',
  },
  buttonsStyling: false,
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#7159c1',
  cancelButtonColor: '#fff',
  cancelButtonText: 'Cancelar',
});

export const Alert = Swal.mixin({
  customClass: {
    confirmButton: 'confirm-btn',
  },
  buttonsStyling: false,
});
