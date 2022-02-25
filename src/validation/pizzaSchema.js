import * as yup from 'yup';

const pizzaSchema = yup.object().shape(){
    name: yup
        .string()
        .trim()
        .required('name must be at least 2 characters')
        .min(2,'name must be at least 2 characters'),
    size: yup
        .string()
        .required('Required')
        .oneOf(['small', 'medium', 'large', 'xlarge'], 'Required'),
    sauce: yup
        .string()
        .required('Required')
        .oneOf(['red', 'garlic', 'alfredo', 'bbq'], 'Required'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    bacon: yup.boolean(),
    chicken: yup.boolean(),
    pineapple: yup.boolean(),
}