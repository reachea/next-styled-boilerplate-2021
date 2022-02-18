import { Tree, TreeNode } from "react-organizational-chart";
import { config, configProps } from "./config";
import { OrganizationalChartContainer, OrganizationalNode } from "./OrganizationalChart.styled";


const Organizational: any = ({ config }: { config: configProps[] }) => {
  return config?.map((x) => {
    return (
      <TreeNode label={<OrganizationalNode><p>{x?.name}</p></OrganizationalNode>} key={x?.name}>
        {x?.children? <Organizational config={x?.children} /> : undefined}
      </TreeNode>
    )
  })
};

const OrganizationalChart = () => {

  return (
    <OrganizationalChartContainer>
      <Tree
        lineWidth={"1px"}
        lineColor={"black"}
        lineBorderRadius={"0px"}
        label={<OrganizationalNode><p>{config?.name}</p></OrganizationalNode>}
      >
        <Organizational config={config.children} />
      </Tree>
    </OrganizationalChartContainer>
  );
};

export default OrganizationalChart;
