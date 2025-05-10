'use client';

type Props = {
    params: {
        location: string;
    };
};

export const dynamic = 'force-dynamic';

export default function BranchPage({ params }: Props) {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-red-900 mb-6">
                {decodeURIComponent(params.location)} Branch
            </h1>
            {/* Add branch specific content */}
        </div>
    );
}