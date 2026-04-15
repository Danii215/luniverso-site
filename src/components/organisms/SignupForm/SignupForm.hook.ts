import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/i18n';
import { registerUser } from '@/core/auth';
import type { SignupFormData } from './SignupForm.types';

export function useSignupForm() {
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<SignupFormData>();
    const router = useRouter();

    async function onSubmit(form: SignupFormData) {
        try {
            const body = {
                username: form.username,
                email: form.email,
                password: form.password,
            };

            const data = await registerUser(body);

            if (data.statusCode === 409) {
                if (data?.message?.includes('Email')) {
                    toast.error(t('signup.emailAlreadyExists'));
                } else {
                    toast.error(t('signup.usernameAlreadyExists'));
                }
                return;
            }

            if (data?.accessToken && data?.refreshToken) {
                router.replace('/');
            }
        } catch {
            toast.error(t('signup.error'));
        }
    }

    return {
        errors,
        register,
        onSubmit,
        handleSubmit,
        t,
        watch,
    };
}
