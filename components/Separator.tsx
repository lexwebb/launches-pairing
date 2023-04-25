import { Typography } from '@mui/material';
import styles from './Separator.module.scss';

const Separator: React.FC<{ title: string }> = ({ title }) => (
  <div className="styles.separator">
    <Typography className={styles.separator}>{title}</Typography>
  </div>
);

export default Separator;
