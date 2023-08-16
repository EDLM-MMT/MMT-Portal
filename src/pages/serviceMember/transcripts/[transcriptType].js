import DefaultLayout from '@/components/layouts/DefaultLayout';
import TranscriptCard from '@/components/cards/TranscriptCard';


export function getServerSideProps(context) {
  const { transcriptType } = context.query;
  return {
    props: {
      transcriptType,
    },
  };
}



export default function TranscriptView({transcriptType}) {
    let link = "";
    let downloadLink = '';
    if (transcriptType === "Basic"){
      link = "https://jst-transcript.s3.us-east-2.amazonaws.com/Sample%20E_TRANSCRIPT.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLWVhc3QtMSJIMEYCIQCvxdidpBmEt7Iaz4ZFAta6cQ9AFtHhv1I5dzCKdQON8wIhAJMK1uG9F%2F4H7BpWVcDazhC6JkFOKgtotsXHmRQ1QNsOKq8DCC8QAxoMOTU1MDM4NTgwMTY3IgzUBL%2B9EwBh40MOZ7gqjAMrQss966l9F1wrDo8K4Xv6ahIx1t9LTRtKC4wWKCtIxQr1ZmgG93ujgoctFr3hOFbaHI9Z0sKOHpvmy22pQOPA2juF9xwp3PXLjuldZZoQWHwPHn%2B7VP3jof9rJNnUB4H2m1DjU13VCh%2Bu2tD7fJM0s8CKO%2Bi727XkHogTvEVTrb1L5u3ckDONCXicSXu4GvesY74RgD4HfWUU05BkAIDUApmMPOsiEyVLoSZ9%2Bft5ElYN3zrQLOWwxG4MTpAB4SMYrcSp4wmdhnE%2FHACNNEKbr7URiF3FkPhA%2B4NAeX5rHGZ5IVk%2Bk7JR0n%2B5JEtZGcT8qK%2F9E1%2B2jSly2GX2bLdXK%2BBHQb8Bxb4CrFwv8gvRdnw1JaY2%2Fbog2KRDsIHw23FWBoccDt%2BjjFHwRPWTIrq83rnE2natJ%2FOaEoNBO7sjdBAkjCeZ2mFU6TLahAq%2Bkd5yYNIBmoazvLOakfoctM9ftqTz%2FTAVyNkjz7M7RlnZ1F9GvMt1hRKA2nNwYI6vkALfArNL%2F8flT4yh2bAwmtnopgY6iwI9R9Gz%2FilWpWTLZnJ8nJPaa2JRgFOYWtjjyyba%2FM45PNwBqa1QnJqOPArH3XAWdqSJjechLNwVRcOayXwgzjU1hMyFS1tFNCBnNsITL1dKthE2TowOmZti%2FWeoEo2wghSGPaOKHrHOmEQ4Ts8dfvTcpO8kCqpCkoxn0dbfLSVQ%2Bo00x0WRmLlY2zOhXHqlqPaBH1SZumJM%2BWQMoH%2B%2BHVHG5v6TUzHuGlwEg3bwTOsalDQzyIbclVDxGQh%2FVCDpkMLCfvTxHrAIjZPJfMSmNc%2Bzy8yUZREyuNvK1PzItiBIDlTDKe%2FuQaV0PbJFWopBdhnLZ72PsI6rc7E4eTMeBNVTbBTFIj3OCmCjxnI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230814T134748Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA54XF4HXDVTFODRG7%2F20230814%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=767c75794c2502ac8bcd148ce8f66fff6da95e78c0381de219be30a3759efe5a";
      downloadLink = 'Smith,Noah_TRANSCRIPT.pdf';
    }
    else if(transcriptType === "Summary"){
      link = "https://jst-transcript.s3.us-east-2.amazonaws.com/Sample%20E_SUMMARY_TRANSCRIPT.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIBY2ZTvjKfb2B4QnpQ%2FG%2FbB7bVk9gF%2B6UbcNrlzNZOzTAiA6kZAXH4hGDs0sE8ULR9x7z01xiHDRtxsejfWRiZhoNCqvAwhhEAMaDDk1NTAzODU4MDE2NyIMrDA4ZmJH1l7NNs0uKowDcFuyGYYIhqJg6MjFaJMAwCH8hffYU2Fq8NsfDh2RW0a%2FUMEHg3dlSsKFMO62qdhF8Z4RLJdeH5DoNczrleTRK%2FCoWkiUqNCP333A%2BzkuIg1Yq%2BCQ65IEf8yfYqSXleT9DqdxNiH5Nxp1zIxWrxxWy0KDIsIEdM4FLMy1FpzaOm75mlevQf1oy1C3QdB3IN7TyUnfIvBGrm5eZ9yuSk5melAEIKaq1Nfn5%2Bj4CsgwGvWCVt%2FEpWqKBSHQ4R3%2F63tuGx%2FOVfcsGHqKhltuoQTqBZxSXU0DxUzGGVl%2FHmLE58VPbt7dmgH%2Bk0%2BQznYNY6a2rxT%2Fl4TNHAAP%2BYFhqlzEwgSkiG19PnQFIQmB90mnhf4xEzJcmlMAB9IiMf4OTyliylVMfSXtGEiGS0JjMcRGDNl%2F%2B%2FcVtul6wTsFnzQrFLtro%2BTggiOzd6OZB89lRbphhY3x7s6lDoo%2BY0qbVxyr9j%2BJgKE4LoUEzTPpTKRP8iV1F%2BLuoWv1hXXQtNqwXkWT3Xub44klpG3dznNQMPrm86YGOo0C5ULh9LIyluWCovLVR%2BIfKX6g%2FNx7%2Fxc370PjchphwSGl7sPMEx7NA06Y2IImScnbmI8sgCmA%2BniyZe0plalproOIdwipBbhDljI4JmX0kSBkEwX1fA1BvcOPA6jApzJcLiHz2jaGi057%2B2mcUBxtNVRLebh6mwzS7jKdBX%2FbtOD7YbSkG8wnzvPZMjJOsOuHUR%2BkCX2dVSkoVVo7wNUutDqTuWYpbe4%2BU5vu6NfM4Xl4hU6RE%2FJKH%2BbdN5XxVLNcxYtbTlHx%2FeT%2FogCKiUFGKTueuwRjG%2FAIrtSQpnJEBaXOXsbYiyVA8k%2BNdlqskSIhQCksS07yC0%2FoiYTyMwUXAHj6ZclfSzKpPaFzhwQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230816T160629Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA54XF4HXDSNEPCMHA%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=aea467c4f87fee6a71f1f0fb97a4769b143e666894944df2b1cfb6c1e8ecfa2e"
      downloadLink = 'Smith,Noah_SUMMARY_TRANSCRIPT.pdf';
    }
    else if(transcriptType === "Academic"){
      link = "https://jst-transcript.s3.us-east-2.amazonaws.com/Sample%20E_ACADEMIC_TRANSCRIPT.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIBY2ZTvjKfb2B4QnpQ%2FG%2FbB7bVk9gF%2B6UbcNrlzNZOzTAiA6kZAXH4hGDs0sE8ULR9x7z01xiHDRtxsejfWRiZhoNCqvAwhhEAMaDDk1NTAzODU4MDE2NyIMrDA4ZmJH1l7NNs0uKowDcFuyGYYIhqJg6MjFaJMAwCH8hffYU2Fq8NsfDh2RW0a%2FUMEHg3dlSsKFMO62qdhF8Z4RLJdeH5DoNczrleTRK%2FCoWkiUqNCP333A%2BzkuIg1Yq%2BCQ65IEf8yfYqSXleT9DqdxNiH5Nxp1zIxWrxxWy0KDIsIEdM4FLMy1FpzaOm75mlevQf1oy1C3QdB3IN7TyUnfIvBGrm5eZ9yuSk5melAEIKaq1Nfn5%2Bj4CsgwGvWCVt%2FEpWqKBSHQ4R3%2F63tuGx%2FOVfcsGHqKhltuoQTqBZxSXU0DxUzGGVl%2FHmLE58VPbt7dmgH%2Bk0%2BQznYNY6a2rxT%2Fl4TNHAAP%2BYFhqlzEwgSkiG19PnQFIQmB90mnhf4xEzJcmlMAB9IiMf4OTyliylVMfSXtGEiGS0JjMcRGDNl%2F%2B%2FcVtul6wTsFnzQrFLtro%2BTggiOzd6OZB89lRbphhY3x7s6lDoo%2BY0qbVxyr9j%2BJgKE4LoUEzTPpTKRP8iV1F%2BLuoWv1hXXQtNqwXkWT3Xub44klpG3dznNQMPrm86YGOo0C5ULh9LIyluWCovLVR%2BIfKX6g%2FNx7%2Fxc370PjchphwSGl7sPMEx7NA06Y2IImScnbmI8sgCmA%2BniyZe0plalproOIdwipBbhDljI4JmX0kSBkEwX1fA1BvcOPA6jApzJcLiHz2jaGi057%2B2mcUBxtNVRLebh6mwzS7jKdBX%2FbtOD7YbSkG8wnzvPZMjJOsOuHUR%2BkCX2dVSkoVVo7wNUutDqTuWYpbe4%2BU5vu6NfM4Xl4hU6RE%2FJKH%2BbdN5XxVLNcxYtbTlHx%2FeT%2FogCKiUFGKTueuwRjG%2FAIrtSQpnJEBaXOXsbYiyVA8k%2BNdlqskSIhQCksS07yC0%2FoiYTyMwUXAHj6ZclfSzKpPaFzhwQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230816T160540Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA54XF4HXDSNEPCMHA%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=4953f45d711a6e38e3b1dc4f29a90ab24bdc65aed86c8a37ccbaa88008aa1e89";
      downloadLink = 'Smith,Noah_ACADEMIC_TRANSCRIPT.pdf';
    }
    else if(transcriptType === "Complete"){
      link = "https://jst-transcript.s3.us-east-2.amazonaws.com/Sample_ComboTranscript.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIBY2ZTvjKfb2B4QnpQ%2FG%2FbB7bVk9gF%2B6UbcNrlzNZOzTAiA6kZAXH4hGDs0sE8ULR9x7z01xiHDRtxsejfWRiZhoNCqvAwhhEAMaDDk1NTAzODU4MDE2NyIMrDA4ZmJH1l7NNs0uKowDcFuyGYYIhqJg6MjFaJMAwCH8hffYU2Fq8NsfDh2RW0a%2FUMEHg3dlSsKFMO62qdhF8Z4RLJdeH5DoNczrleTRK%2FCoWkiUqNCP333A%2BzkuIg1Yq%2BCQ65IEf8yfYqSXleT9DqdxNiH5Nxp1zIxWrxxWy0KDIsIEdM4FLMy1FpzaOm75mlevQf1oy1C3QdB3IN7TyUnfIvBGrm5eZ9yuSk5melAEIKaq1Nfn5%2Bj4CsgwGvWCVt%2FEpWqKBSHQ4R3%2F63tuGx%2FOVfcsGHqKhltuoQTqBZxSXU0DxUzGGVl%2FHmLE58VPbt7dmgH%2Bk0%2BQznYNY6a2rxT%2Fl4TNHAAP%2BYFhqlzEwgSkiG19PnQFIQmB90mnhf4xEzJcmlMAB9IiMf4OTyliylVMfSXtGEiGS0JjMcRGDNl%2F%2B%2FcVtul6wTsFnzQrFLtro%2BTggiOzd6OZB89lRbphhY3x7s6lDoo%2BY0qbVxyr9j%2BJgKE4LoUEzTPpTKRP8iV1F%2BLuoWv1hXXQtNqwXkWT3Xub44klpG3dznNQMPrm86YGOo0C5ULh9LIyluWCovLVR%2BIfKX6g%2FNx7%2Fxc370PjchphwSGl7sPMEx7NA06Y2IImScnbmI8sgCmA%2BniyZe0plalproOIdwipBbhDljI4JmX0kSBkEwX1fA1BvcOPA6jApzJcLiHz2jaGi057%2B2mcUBxtNVRLebh6mwzS7jKdBX%2FbtOD7YbSkG8wnzvPZMjJOsOuHUR%2BkCX2dVSkoVVo7wNUutDqTuWYpbe4%2BU5vu6NfM4Xl4hU6RE%2FJKH%2BbdN5XxVLNcxYtbTlHx%2FeT%2FogCKiUFGKTueuwRjG%2FAIrtSQpnJEBaXOXsbYiyVA8k%2BNdlqskSIhQCksS07yC0%2FoiYTyMwUXAHj6ZclfSzKpPaFzhwQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230816T160703Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA54XF4HXDSNEPCMHA%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=e4f847cd3cf0fdf0ab25c362ba2635179ae2575c5f6103ca82a9f60b1f5710d3";
      downloadLink = "Smith,Noah_COMBO_TRANSCRIPT.pdf";
    }

    return (
        <DefaultLayout>
                <div className='flex flex-row gap-6'>
                <TranscriptCard title={`${transcriptType} Transcript`} 
                    description={"Includes military courses taken by service member."}
                    type={transcriptType} routePath={"/serviceMember/transcripts"} link={link} downloadLink={downloadLink}/>
                </div>
        </DefaultLayout>
    );
}