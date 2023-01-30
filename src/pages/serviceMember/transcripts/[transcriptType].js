import DefaultLayout from '@/components/layouts/DefaultLayout';
import TranscriptCard from '@/components/cards/TranscriptCard';
import useStore from '@/store/store';

export function getServerSideProps(context) {
  const { transcriptType } = context.query;
  return {
    props: {
      transcriptType,
    },
  };
}



export default function TranscriptView({transcriptType}) {
    const userData = useStore((state) => state.userData);
    let link = "";
    if (transcriptType === "Basic"){
      link = "https://jst-transcript.s3.us-east-2.amazonaws.com/Sample%20E_TRANSCRIPT.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIGR5kNYIHeceqZe%2FHfOUR%2BJBTcyBC%2Fmt3qBmg6f6LA0YAiBtLUqdpFWsPUtK04YRgv1DIvnUyoY6PG3Q2v8Y%2FZ67yiq4Awj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDk1NTAzODU4MDE2NyIMETgJBBoZ5m0v5jdEKowDe6%2BTx2D8SEm23WtjXpjhWSHCPCtJQnhEoPdrfUMJYfuaGUGHTshVGtk4AIyghCj78hA6AXiTAYLCedQS0LVFacdsy22Uz5aeudnM03SgnpoUCiL46lVKoTrSsOlTZ8zI%2Fky0BP%2BOoD2XSwBJ5djWMZjG0SjSJ7Q61zae4fh66GkwDR0b72Q0oJt0Y0%2FNrd2y6XQGXRf7i4ueMovXqeeFqpV0%2FbXk9FXoTUcWclaaSlE84069yY9zl43dNoNcyaqIN%2FkMyoPdBpfM46t9OcydZtDUHAZFDy6lOU7S0FeHDhx8yroXRRJFcGnNu%2FzAjvVHA%2B69Rr2hQKupd9Bw30v3RpLaJTgUk7a7pjeYohsMuDB7dxwaINlizo4%2FgyUpeDa6MaF6H3Gll5IfdWR205HrEd0brmYPKkSCa7sXWZMdzE4SsbudQRI20C5OB8IUbSLDfMClP%2FWe1lDwCwQSGXqcoqL6lys2bP0B3o%2Fuj3Tvo1TZrciMQDSb9gyDjSe17og1GTwCY858yDfJsuymMJuEwZ4GOo0CNvNeebKuFt44tS0ncDY8b2wBr6aJS2c%2BV%2FIv8vRbbEmqrjjibfF6qHW5j5q054RPdioSryZnRnt6iFamo2TlKrIZPqIlAYTfLYJSDkiaZpGNDzZIXkSowra4PKocS0g1AjdOurtOphT%2FvYKRPD46rX9Y2tb3E5ktO%2BnXHn%2BAtDW89CEvC6DYYPM8nojD43JLJcENXXFKh%2FjgogxD5ouvgvEJ1FitA8S7%2BoNOG904uXTI8v%2FN7dkQzBw%2FYzaZrETHxPd8SeBvZp%2FLg54zoKOneQn4ubirFlMZ1%2BLR2QsXS%2FoELjM6gh6LD%2B1E%2FaPzDWPcNfc%2FU5RTeI3D8drtoLZzV1Y%2FOoeby2q0q40CnLI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230124T221412Z&X-Amz-SignedHeaders=host&X-Amz-Expires=10800&X-Amz-Credential=ASIA54XF4HXDWJO2CYO6%2F20230124%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=d6c03a9c6469e09894b2fb6f1e3f1c2b7d020442794d9f46bfa126f56ba9880f";
    }
    else if(transcriptType === "Summary"){
      link = " https://jst-transcript.s3.us-east-2.amazonaws.com/Sample%20E_SUMMARY_TRANSCRIPT.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIGR5kNYIHeceqZe%2FHfOUR%2BJBTcyBC%2Fmt3qBmg6f6LA0YAiBtLUqdpFWsPUtK04YRgv1DIvnUyoY6PG3Q2v8Y%2FZ67yiq4Awj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDk1NTAzODU4MDE2NyIMETgJBBoZ5m0v5jdEKowDe6%2BTx2D8SEm23WtjXpjhWSHCPCtJQnhEoPdrfUMJYfuaGUGHTshVGtk4AIyghCj78hA6AXiTAYLCedQS0LVFacdsy22Uz5aeudnM03SgnpoUCiL46lVKoTrSsOlTZ8zI%2Fky0BP%2BOoD2XSwBJ5djWMZjG0SjSJ7Q61zae4fh66GkwDR0b72Q0oJt0Y0%2FNrd2y6XQGXRf7i4ueMovXqeeFqpV0%2FbXk9FXoTUcWclaaSlE84069yY9zl43dNoNcyaqIN%2FkMyoPdBpfM46t9OcydZtDUHAZFDy6lOU7S0FeHDhx8yroXRRJFcGnNu%2FzAjvVHA%2B69Rr2hQKupd9Bw30v3RpLaJTgUk7a7pjeYohsMuDB7dxwaINlizo4%2FgyUpeDa6MaF6H3Gll5IfdWR205HrEd0brmYPKkSCa7sXWZMdzE4SsbudQRI20C5OB8IUbSLDfMClP%2FWe1lDwCwQSGXqcoqL6lys2bP0B3o%2Fuj3Tvo1TZrciMQDSb9gyDjSe17og1GTwCY858yDfJsuymMJuEwZ4GOo0CNvNeebKuFt44tS0ncDY8b2wBr6aJS2c%2BV%2FIv8vRbbEmqrjjibfF6qHW5j5q054RPdioSryZnRnt6iFamo2TlKrIZPqIlAYTfLYJSDkiaZpGNDzZIXkSowra4PKocS0g1AjdOurtOphT%2FvYKRPD46rX9Y2tb3E5ktO%2BnXHn%2BAtDW89CEvC6DYYPM8nojD43JLJcENXXFKh%2FjgogxD5ouvgvEJ1FitA8S7%2BoNOG904uXTI8v%2FN7dkQzBw%2FYzaZrETHxPd8SeBvZp%2FLg54zoKOneQn4ubirFlMZ1%2BLR2QsXS%2FoELjM6gh6LD%2B1E%2FaPzDWPcNfc%2FU5RTeI3D8drtoLZzV1Y%2FOoeby2q0q40CnLI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230124T221349Z&X-Amz-SignedHeaders=host&X-Amz-Expires=10800&X-Amz-Credential=ASIA54XF4HXDWJO2CYO6%2F20230124%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=4b16e008537bb5e4f666b20cd8a56ed355a6d72e51485d9f1130ed9a53477902";
    }
    else if(transcriptType === "Academic"){
      link = "https://jst-transcript.s3.us-east-2.amazonaws.com/Sample%20E_ACADEMIC_TRANSCRIPT.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIGR5kNYIHeceqZe%2FHfOUR%2BJBTcyBC%2Fmt3qBmg6f6LA0YAiBtLUqdpFWsPUtK04YRgv1DIvnUyoY6PG3Q2v8Y%2FZ67yiq4Awj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDk1NTAzODU4MDE2NyIMETgJBBoZ5m0v5jdEKowDe6%2BTx2D8SEm23WtjXpjhWSHCPCtJQnhEoPdrfUMJYfuaGUGHTshVGtk4AIyghCj78hA6AXiTAYLCedQS0LVFacdsy22Uz5aeudnM03SgnpoUCiL46lVKoTrSsOlTZ8zI%2Fky0BP%2BOoD2XSwBJ5djWMZjG0SjSJ7Q61zae4fh66GkwDR0b72Q0oJt0Y0%2FNrd2y6XQGXRf7i4ueMovXqeeFqpV0%2FbXk9FXoTUcWclaaSlE84069yY9zl43dNoNcyaqIN%2FkMyoPdBpfM46t9OcydZtDUHAZFDy6lOU7S0FeHDhx8yroXRRJFcGnNu%2FzAjvVHA%2B69Rr2hQKupd9Bw30v3RpLaJTgUk7a7pjeYohsMuDB7dxwaINlizo4%2FgyUpeDa6MaF6H3Gll5IfdWR205HrEd0brmYPKkSCa7sXWZMdzE4SsbudQRI20C5OB8IUbSLDfMClP%2FWe1lDwCwQSGXqcoqL6lys2bP0B3o%2Fuj3Tvo1TZrciMQDSb9gyDjSe17og1GTwCY858yDfJsuymMJuEwZ4GOo0CNvNeebKuFt44tS0ncDY8b2wBr6aJS2c%2BV%2FIv8vRbbEmqrjjibfF6qHW5j5q054RPdioSryZnRnt6iFamo2TlKrIZPqIlAYTfLYJSDkiaZpGNDzZIXkSowra4PKocS0g1AjdOurtOphT%2FvYKRPD46rX9Y2tb3E5ktO%2BnXHn%2BAtDW89CEvC6DYYPM8nojD43JLJcENXXFKh%2FjgogxD5ouvgvEJ1FitA8S7%2BoNOG904uXTI8v%2FN7dkQzBw%2FYzaZrETHxPd8SeBvZp%2FLg54zoKOneQn4ubirFlMZ1%2BLR2QsXS%2FoELjM6gh6LD%2B1E%2FaPzDWPcNfc%2FU5RTeI3D8drtoLZzV1Y%2FOoeby2q0q40CnLI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230124T212224Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIA54XF4HXDWJO2CYO6%2F20230124%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=4601c7ef64abf20a37c21a3219ca6a7e6c23655c9a039884cd72744e26d838d7";
    }
    else if(transcriptType === "Complete"){
      link = "https://jst-transcript.s3.us-east-2.amazonaws.com/Sample_ComboTranscript.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIGR5kNYIHeceqZe%2FHfOUR%2BJBTcyBC%2Fmt3qBmg6f6LA0YAiBtLUqdpFWsPUtK04YRgv1DIvnUyoY6PG3Q2v8Y%2FZ67yiq4Awj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDk1NTAzODU4MDE2NyIMETgJBBoZ5m0v5jdEKowDe6%2BTx2D8SEm23WtjXpjhWSHCPCtJQnhEoPdrfUMJYfuaGUGHTshVGtk4AIyghCj78hA6AXiTAYLCedQS0LVFacdsy22Uz5aeudnM03SgnpoUCiL46lVKoTrSsOlTZ8zI%2Fky0BP%2BOoD2XSwBJ5djWMZjG0SjSJ7Q61zae4fh66GkwDR0b72Q0oJt0Y0%2FNrd2y6XQGXRf7i4ueMovXqeeFqpV0%2FbXk9FXoTUcWclaaSlE84069yY9zl43dNoNcyaqIN%2FkMyoPdBpfM46t9OcydZtDUHAZFDy6lOU7S0FeHDhx8yroXRRJFcGnNu%2FzAjvVHA%2B69Rr2hQKupd9Bw30v3RpLaJTgUk7a7pjeYohsMuDB7dxwaINlizo4%2FgyUpeDa6MaF6H3Gll5IfdWR205HrEd0brmYPKkSCa7sXWZMdzE4SsbudQRI20C5OB8IUbSLDfMClP%2FWe1lDwCwQSGXqcoqL6lys2bP0B3o%2Fuj3Tvo1TZrciMQDSb9gyDjSe17og1GTwCY858yDfJsuymMJuEwZ4GOo0CNvNeebKuFt44tS0ncDY8b2wBr6aJS2c%2BV%2FIv8vRbbEmqrjjibfF6qHW5j5q054RPdioSryZnRnt6iFamo2TlKrIZPqIlAYTfLYJSDkiaZpGNDzZIXkSowra4PKocS0g1AjdOurtOphT%2FvYKRPD46rX9Y2tb3E5ktO%2BnXHn%2BAtDW89CEvC6DYYPM8nojD43JLJcENXXFKh%2FjgogxD5ouvgvEJ1FitA8S7%2BoNOG904uXTI8v%2FN7dkQzBw%2FYzaZrETHxPd8SeBvZp%2FLg54zoKOneQn4ubirFlMZ1%2BLR2QsXS%2FoELjM6gh6LD%2B1E%2FaPzDWPcNfc%2FU5RTeI3D8drtoLZzV1Y%2FOoeby2q0q40CnLI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230124T221436Z&X-Amz-SignedHeaders=host&X-Amz-Expires=10800&X-Amz-Credential=ASIA54XF4HXDWJO2CYO6%2F20230124%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=7318b0705020c5a63d75d34e06c3bc7d6468d922f843ad561fa20e097aed7dff";
    }


    return (
        <DefaultLayout>
                <div className='flex flex-row gap-6'>
                <TranscriptCard title={`${transcriptType} Transcript`} 
                    description={"Includes military courses taken by service member."}
                    type={transcriptType} routePath={"/serviceMember/transcripts"} link={link}/>
                </div>
        </DefaultLayout>
    );
}