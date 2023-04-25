import { Typography } from '@mui/material';
import classNames from 'classnames';
import styles from './LaunchBanner.module.scss';

const LaunchBanner: React.FC<{ success: boolean }> = ({ success }) => {
  return (
    <div className={classNames(styles.launchStatus, success ? styles.success : styles.failed)}>
      <Typography color="text.secondary" data-testid="card-success">
        {success ? 'SUCCESS' : 'FAILURE'}
      </Typography>
    </div>
  );
};

export default LaunchBanner;
