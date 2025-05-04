export const dynamic = 'force-dynamic';

type Props = {
    params: {
        location: string;
    };
    searchParams: { [key: string]: string | string[] | undefined };
};

export default async function BranchPage({ params }: Props) {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-red-900 mb-6">
                {decodeURIComponent(params.location)} Branch
            </h1>
            {/* Add branch specific content */}
        </div>
    );
}