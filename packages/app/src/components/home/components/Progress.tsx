import React, { PropsWithChildren } from 'react';
import { GaugeCard } from '@backstage/core-components';
import Grid from '@material-ui/core/Grid';
import { MemoryRouter } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import Info from '@material-ui/icons/Info';

const linkInfo = { title: 'Go to XYZ Location', link: '#' };

const Wrapper = ({ children }: PropsWithChildren<{}>) => (
  <MemoryRouter>
    <Grid container spacing={2}>
      {children}
    </Grid>
  </MemoryRouter>
);

export default {
  title: 'Data Display/Progress Card',
  component: GaugeCard,
};

export const Default = () => (
 <>
    <Grid item>
      <GaugeCard title="Progress" progress={0.3} />
    </Grid>
    <Grid item>
      <GaugeCard title="Progress" progress={0.57} />
    </Grid>
    <Grid item>
      <GaugeCard title="Progress" progress={0.89} />
    </Grid>
    <Grid item>
      <GaugeCard title="Progress" inverse progress={0.2} />
    </Grid>
  </>
);

export const Subhead = () => (
  <Wrapper>
    <Grid item>
      <GaugeCard title="Progress" subheader="With a subheader" progress={0.3} />
    </Grid>
    <Grid item>
      <GaugeCard
        title="Progress"
        subheader="With a subheader"
        progress={0.57}
      />
    </Grid>
    <Grid item>
      <GaugeCard
        title="Progress"
        subheader="With a subheader"
        progress={0.89}
      />
    </Grid>
    <Grid item>
      <GaugeCard
        title="Progress"
        subheader="With a subheader"
        inverse
        progress={0.2}
      />
    </Grid>
  </Wrapper>
);

export const LinkInFooter = () => (
  <Wrapper>
    <Grid item>
      <GaugeCard title="Progress" deepLink={linkInfo} progress={0.3} />
    </Grid>
    <Grid item>
      <GaugeCard title="Progress" deepLink={linkInfo} progress={0.57} />
    </Grid>
    <Grid item>
      <GaugeCard title="Progress" deepLink={linkInfo} progress={0.89} />
    </Grid>
    <Grid item>
      <GaugeCard title="Progress" deepLink={linkInfo} inverse progress={0.2} />
    </Grid>
  </Wrapper>
);

export const StaticColor = () => (
  <Wrapper>
    <Grid item>
      <GaugeCard getColor={() => '#f00'} title="Red" progress={0.5} />
    </Grid>
    <Grid item>
      <GaugeCard getColor={() => '#0f0'} title="Green" progress={0.5} />
    </Grid>
    <Grid item>
      <GaugeCard getColor={() => '#00f'} title="Blue" progress={0.5} />
    </Grid>
    <Grid item>
      <GaugeCard
        getColor={({ palette }) => palette.status.error}
        title="palette.status.error"
        progress={0.5}
      />
    </Grid>
  </Wrapper>
);

export const InfoMessage = () => (
  <Wrapper>
    <Grid item>
      <GaugeCard
        title="Progress"
        subheader="With a subheader"
        progress={0.3}
        icon={
          <Tooltip title="Info Message" arrow>
            <Info style={{ float: 'right' }} />
          </Tooltip>
        }
      />
    </Grid>
    <Grid item>
      <GaugeCard
        title="Progress"
        subheader="With a subheader"
        progress={0.57}
        icon={
          <Tooltip title="Info Message" arrow>
            <Info style={{ float: 'right' }} />
          </Tooltip>
        }
      />
    </Grid>
    <Grid item>
      <GaugeCard
        title="Progress"
        subheader="With a subheader"
        progress={0.89}
        icon={
          <Tooltip title="Info Message" arrow>
            <Info style={{ float: 'right' }} />
          </Tooltip>
        }
      />
    </Grid>
    <Grid item>
      <GaugeCard
        title="Progress"
        subheader="With a subheader"
        inverse
        progress={0.2}
        icon={
          <Tooltip title="Info Message" arrow>
            <Info style={{ float: 'right' }} />
          </Tooltip>
        }
      />
    </Grid>
  </Wrapper>
);

export const HoverMessage = () => (
  <Wrapper>
    <Grid item>
      <GaugeCard title="Progress" progress={0.3} description="Hover Message" />
    </Grid>
    <Grid item>
      <GaugeCard title="Progress" progress={0.57} description="Hover Message" />
    </Grid>
    <Grid item>
      <GaugeCard title="Progress" progress={0.89} description="Hover Message" />
    </Grid>
    <Grid item>
      <GaugeCard
        title="Progress"
        inverse
        progress={0.2}
        description="Hover Message"
      />
    </Grid>
  </Wrapper>
);