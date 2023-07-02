import React from 'react';
import { NextPage } from 'next';

import { Layout } from '@/components/ui';
import { DashboardStudentsPage } from '@/components/templates';

type Props = {
  urlParams: {
    search: string;
    limit: number;
    skip: number;
  };
};

const Students: NextPage<Props> = ({ urlParams }) => {
  return (
    <Layout>
      <DashboardStudentsPage urlParams={urlParams} />
    </Layout>
  );
};

Students.getInitialProps = (ctx) => {
  return {
    urlParams: {
      search: (ctx.query.searchQuery as string) || '',
      limit: Number(ctx.query.limit) || 5,
      skip: Number(ctx.query.skip) || 0,
    },
  };
};
export default Students;
