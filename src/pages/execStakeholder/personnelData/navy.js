import DefaultLayout from '@/components/layouts/DefaultLayout';
import BranchPersonnelData from '@/components/cards/execStakeholder/BranchPersonnelData';

export default function NavyPersonnel() {

    return (
      <DefaultLayout>
            <BranchPersonnelData title={"Navy Personnel Data"}
                chartLabels={["E-", "E-1", "E-2", "E-3", "E-4", "E-5", "E-6", "E-7", "E-8", "E-9", "O-1", "O-2", "O-3", "O-4", "O-5", "O-6", "W-1", "W-2", "W-3", "W-4", "W-5"]}
                avgData={[20, 896, 1104, 2123, 3564, 5342, 7586, 10623, 12432, 9725, 3715, 3593, 5634, 3959, 1630, 199, 59, 2450, 3062, 2210, 147]}
                personData={[2, 1719, 2474, 17614, 24611, 51771, 31211, 10992, 3298, 938, 305, 382, 1450, 447, 90, 24, 2, 170, 242, 95, 2]}
                creditsData={[20, 16946, 21144, 206502, 484050, 1164227, 983745, 477150, 191448, 66584, 12818, 14507, 40653, 14390, 3021, 403, 59, 9599, 14686, 6384, 147]} />
      </DefaultLayout>
    );
}
