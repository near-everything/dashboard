import Badge from "../components/Badge";
import Button from "../components/Button";
import Table from "../components/Table";
import TableBody from "../components/TableBody";
import TableCell from "../components/TableCell";
import TableContainer from "../components/TableContainer";
import TableHeader from "../components/TableHeader";
import TableRow from "../components/TableRow";
import PageTitle from "../components/Typography/PageTitle";
import { useApproveInvite, useInvites } from "../features/auth/authApi";

function Invite() {
  const { data: invites, isLoading, isError } = useInvites();
  const approveInvite = useApproveInvite();

  return (
    <>
      <PageTitle>Invites awaiting approval</PageTitle>
      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Phone Number</TableCell>
              <TableCell>Approve</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {invites?.filter(it => !it.node.isApproved ).map((invite, index) => (
              <TableRow key={index}>
                <TableCell>
                  <span className="text-sm">{invite?.node.phoneNumber}</span>
                </TableCell>
                <TableCell>
                  <Badge type="primary">
                    <Button
                      onClick={() => approveInvite.mutate(invite?.node.phoneNumber)}
                    />
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Invite;
