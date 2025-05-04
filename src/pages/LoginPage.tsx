import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// useForm 이 참고할 schema
const schema = z.object({
  id: z
    .string()
    .min(8, { message: '아이디는 8자 이상이어야 합니다.' })
    .max(20, { message: '아이디는 20자 이하여야 합니다.' }),
  password: z
    .string()
    .min(8, { message: '비밀번호는 8자 이상이어야 합니다.' })
    .max(20, { message: '비밀번호는 20자 이하여야 합니다.' }),
});

type LoginFields = z.infer<typeof schema>;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFields>({
    defaultValues: {
      id: '',
      password: '',
    },
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: LoginFields) => {
    await console.log(data);

    // api 호출 로직
  };

  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-5">
      <h1 className="mb-10 flex text-center text-6xl">
        SERI
        <br />
        VOCA
      </h1>
      <div className="flex flex-col gap-3">
        <input
          {...register('id')} // html <-> useForm schema 바인딩
          className="h-10 w-60 rounded-md bg-gray-200 p-2 placeholder-gray-600"
          placeholder="아이디를 입력하세요..."
        ></input>
        {errors.id && <div className="text-sm text-red-500">{errors.id.message}</div>}
        <input
          {...register('password')}
          type="password"
          className="h-10 w-60 rounded-md bg-gray-200 p-2 placeholder-gray-600"
          placeholder="비밀번호를 입력하세요..."
        ></input>
        {errors.password && <div className="text-sm text-red-500">{errors.password.message}</div>}
      </div>
      <button
        onClick={handleSubmit(onSubmit)}  // 예외 플로우 기본 제공
        className="h-10 w-20 cursor-pointer rounded-md bg-yellow-400 p-2"
      >
        로그인
      </button>
      <button className="mt-15 cursor-pointer underline">회원가입</button>
    </div>
  );
};

export default LoginPage;
