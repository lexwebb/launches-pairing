import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import classNames from 'classnames';
import Separator from './Separator';
import styles from './LaunchCard.module.scss';
import { LaunchWithPayload } from '../hooks/useGetLaunches';
import Image from 'next/image';
import LaunchBanner from './LaunchBanner';

const LaunchCard: React.FC<{ launch: LaunchWithPayload }> = ({ launch }) => {
  return (
    <Card key={launch.id} data-testid="card" className={styles.card}>
      <CardContent>
        <div className={styles.header}>
          <Typography fontWeight="bold" sx={{ fontSize: 24 }} data-testid="card-title">
            {launch.name}
          </Typography>
          <Typography color="text.secondary" data-testid="card-date">
            {new Date(launch.date_utc).toLocaleDateString()}
          </Typography>
        </div>
        {launch.cores[0] && (
          <Typography color="text.secondary" data-testid="card-core">
            Core: {launch.cores[0].core}
          </Typography>
        )}
        <div>
          <Separator title="PAYLOADS" />
          <ul>
            {launch.payloads.map((payload, index) => (
              <li key={payload.id}>
                <Typography color="text.secondary" data-testid={`card-payload-${index}`}>
                  {payload.name}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.imageContainer}>
          <Separator title="PATCH" />
          <Image src={launch.links.patch.small} alt="Launch Patch" width="200" height={200} data-testid="card-image" />
        </div>
      </CardContent>
      <LaunchBanner success={launch.success} />
    </Card>
  );
};

export default LaunchCard;
