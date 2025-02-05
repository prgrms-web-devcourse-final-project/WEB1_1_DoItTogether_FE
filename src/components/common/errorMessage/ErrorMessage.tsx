interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <p className='text-main font-caption'>{message}</p>;
};

export default ErrorMessage;
