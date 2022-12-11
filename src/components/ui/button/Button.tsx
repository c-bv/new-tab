import styles from './Button.module.scss';

interface Props {
    id?: string;
    type: 'primary' | 'secondary' | 'danger' | 'warning' | 'icon';
    sx?: any;
    children?: React.ReactNode;
    onClick: () => void;
}

const Button = ({ id, type, sx, children, onClick }: Props) => {
    return (
        <button
            id={id}
            onClick={onClick}
            className={styles[type]}
            style={{ ...sx }}
        >
            {children}
        </button>
    );
};

export default Button;