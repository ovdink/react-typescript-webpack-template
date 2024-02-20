// import { Id, toast, ToastContent, ToastOptions } from 'react-toastify';
// import styled from '@emotion/styled';

// import { theme } from 'styles';

// import { ReactComponent as ErrorSVG } from 'images/notificationsIcons/error-icon.svg';
// import { ReactComponent as SuccessSVG } from 'images/notificationsIcons/success-icon.svg';
// import { ReactComponent as WarningSVG } from 'images/notificationsIcons/warning-icon.svg';

// const TitleStyled = styled.p`
//     font-weight: ${theme.text.normal.fontWeight};
//     font-size: ${theme.text.normal.fontSize};
// `;

// const ContentWrapper = styled.div`
//     font-weight: ${theme.text.small.fontWeight};
//     font-size: ${theme.text.small.fontSize};

//     transition: color 0.15s ease-in-out;
// `;

// const notificationWrapper = (title: string, content: any) => (
//     <div>
//         <TitleStyled>{title}</TitleStyled>

//         <ContentWrapper>{content}</ContentWrapper>
//     </div>
// );

// export const notification = {
//     success: <TData = unknown,>(
//         content: ToastContent<TData>,
//         options?: ToastOptions<Record<string, any>> | undefined,
//     ): Id =>
//         toast.success(notificationWrapper('Success', content), {
//             icon: <SuccessSVG />,
//             ...options,
//         }),
//     warn: <TData = unknown,>(
//         content: ToastContent<TData>,
//         options?: ToastOptions<Record<string, any>> | undefined,
//     ): Id =>
//         toast.warn(notificationWrapper('Warning', content), {
//             icon: <WarningSVG />,
//             ...options,
//         }),
//     error: <TData = unknown,>(
//         content: ToastContent<TData>,
//         options?: ToastOptions<Record<string, any>> | undefined,
//     ): Id =>
//         toast.error(notificationWrapper('Something went wrong', content), {
//             icon: <ErrorSVG />,
//             ...options,
//         }),
// };
