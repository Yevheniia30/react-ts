import { useForm, SubmitHandler, FieldValues, useWatch } from 'react-hook-form';
import { useEffect } from 'react';

const Form = () => {
  const { handleSubmit, register, reset, control } = useForm();

  const name = useWatch({ name: 'name', control });

  useEffect(() => {
    if (name) {
      console.log(name);
    }
  }, []);

  const onSubmit1 = (e: any) => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form);
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    // const email=form[1]
    console.log(name, email);
    form.reset();
  };

  const onSubmit: SubmitHandler<FieldValues> = data => {
    console.log('data', data);
    reset();
  };

  console.log('render');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>FORM</p>
      <input {...register('name')} />
      <input {...register('email')} />
      <input type="submit" value="submit" />
    </form>
  );
};

export default Form;
