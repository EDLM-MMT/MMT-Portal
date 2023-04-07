import DefaultLayout from '@/components/layouts/DefaultLayout';
import { useState, useEffect } from 'react';
import BranchPersonnelData from '@/components/cards/execStakeholder/BranchPersonnelData';

export default function ArmyPersonnel() {

    return (
      <DefaultLayout>
            <BranchPersonnelData title={"Army Personnel Data"}
                avgData={[4990, 2515, 3146, 5300, 8568, 14786, 21691, 11786, 13530]}
                personData={[11661, 9921, 46952, 181593, 138599, 74103, 21433, 3474, 1211]}
                creditsData={[116085, 100784, 411822, 1404158, 1373939, 1707422, 867956, 182657, 75844]} />
      </DefaultLayout>
    );
}
