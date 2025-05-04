import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// zod 로 form 전체의 입력 필드 구조 schema 작성
const schema = z.object({
    nickname: z.string()    // 한국어 닉네임에 관한 예외처리 및 기획
    .min(2, { message: '닉네임은 2자 이상이어야 합니다.' })
    .max(20, { message: '닉네임은 20자 이하여야 합니다.' }),
    id: z
    .string()
    .min(8, { message: '아이디는 8자 이상이어야 합니다.' })
    .max(20, { message: '아이디는 20자 이하여야 합니다.' }),
    password: z
    .string()
    .min(8, { message: '비밀번호는 8자 이상이어야 합니다.' })
    .max(20, { message: '비밀번호는 20자 이하여야 합니다.' }),
    confirmPassword: z
    .string()
    .min(8, { message: '비밀번호는 8자 이상이어야 합니다.' })
    .max(20, { message: '비밀번호는 20자 이하여야 합니다.' }),
})
.refine((data) => data.password === data.confirmPassword, { 
    path: ['confirmPassword'],
    message: '비밀번호가 일치하지 않습니다.',
});

type SignupFields = z.infer<typeof schema>;

const SignupPage = () => {
    // useForm
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupFields>({
        defaultValues: {
            nickname: '',
            id: '',
            password: '',
            confirmPassword: '',
        },
        resolver: zodResolver(schema),
        mode: 'onBlur',
    })

    // pseudo onSubmit
    const onSubmit = async (formData: SignupFields) => {
        await console.log(formData);
    }

    return (
        <div className="flex h-dvh flex-col items-center justify-center gap-5">
            <h1 className="mb-10 flex text-center text-6xl">
                SERI
                <br />
                VOCA
            </h1>
            <div className="flex flex-col gap-3">
                <input
                    {...register('nickname')}
                    className="h-10 w-60 rounded-md bg-gray-200 p-2 placeholder-gray-600"
                    placeholder="닉네임을 입력하세요..."></input>
                {errors.nickname && <div className="text-sm text-red-500">{errors.nickname.message}</div>}
                <input
                    {...register('id')}
                    className="h-10 w-60 rounded-md bg-gray-200 p-2 placeholder-gray-600"
                    placeholder="아이디를 입력하세요..."></input>
                {errors.id && <div className="text-sm text-red-500">{errors.id.message}</div>}
                <input
                    {...register('password')}
                    type="password"
                    className="h-10 w-60 rounded-md bg-gray-200 p-2 placeholder-gray-600"
                    placeholder="비밀번호를 입력하세요..."></input>
                {errors.password && <div className="text-sm text-red-500">{errors.password.message}</div>}
                <input
                    {...register('confirmPassword')}
                    type="password"
                    className="h-10 w-60 rounded-md bg-gray-200 p-2 placeholder-gray-600"
                    placeholder="비밀번호 확인을 입력하세요..."></input>
                {errors.confirmPassword && <div className="text-sm text-red-500">{errors.confirmPassword.message}</div>}
            </div>
            <button
                onClick={handleSubmit(onSubmit)}
                className="h-10 w-20 cursor-pointer rounded-md bg-yellow-400 p-2"
            >
                회원가입
            </button>
        </div>
    )
}

export default SignupPage;