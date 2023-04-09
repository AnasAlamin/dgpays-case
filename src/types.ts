export interface GridProps {
    source: {
        name: string;
        mailReceivedDate: string;
        solutionSentDate?: string | undefined;
        isBackgroundColorRed?: boolean | undefined;
    }[];
    innerRef: any
}