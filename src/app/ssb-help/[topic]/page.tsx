export const dynamic = 'force-dynamic';

type Props = {
    params: {
        topic: string;
    };
    searchParams: { [key: string]: string | string[] | undefined };
};

export default async function SSBHelpPage({ params }: Props) {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-red-900 mb-6">
                {decodeURIComponent(params.topic).replace(/-/g, ' ')}
            </h1>
            {/* Add SSB help topic specific content */}
        </div>
    );
}