export const instialValue = {
    number: "",
    password: "",
}

export const number = 1234567890;
export const validPassword = 'pt123';
export const validOtp = 123456;

export const intialArray = ['', '', '', '', '', '']

export const intialUser = [
    {
        id: 1121,
        name: 'Pharmacist',
        status: 'Active',
        permissions: {
            orders: { view: false, add: false, edit: true, update: true, delete: true },
            invite_code: { view: true, add: true },
            medicine_master: { view: true, add: true, edit: true, update: true, delete: true },
            coupon: { view: true, add: true, edit: true, update: true, delete: true },
        },
    },
    {
        id: 24233,
        name: 'parker',
        status: 'Active',
        permissions: {
            orders: { view: false, add: "hello", edit: true, update: true, delete: true },
            invite_code: { view: true, add: true },
            medicine_master: { view: true, add: true, edit: true, update: true, delete: true },
            coupon: { view: true, add: true, edit: true, update: true, delete: true },
        },
    },
    {
        id: 12322,
        name: 'Admin',
        status: 'Active',
        permissions: {
            orders: { view: false, add: "hello", edit: true, update: true, delete: true },
            invite_code: { view: true, add: true },
            medicine_master: { view: true, add: true, edit: true, update: true, delete: true },
            coupon: { view: true, add: true, edit: true, update: true, delete: true },
        },
    },
    {
        id: 223,
        name: 'Custmore Care',
        status: 'Active',
        permissions: {
            orders: { view: false, add: "hello", edit: true, update: true, delete: true },
            invite_code: { view: true, add: true },
            medicine_master: { view: true, add: true, edit: true, update: true, delete: true },
            coupon: { view: true, add: true, edit: true, update: true, delete: true },
        },
    },
]

export const dummyUser = {
    id: "",
    name: '',
    status: '',
    permissions: {
        orders: { view: false, add: false, edit: false, update: false, delete: false },
        invite_code: { view: false, add: false },
        medicine_master: { view: false, add: false, edit: false, update: false, delete: false },
        coupon: { view: false, add: false, edit: false, update: false, delete: false },
    },
}