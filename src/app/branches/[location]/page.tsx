type PageProps = {
    params: {
        location: string;
    };
};

export default function BranchPage({ params }: PageProps) {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-red-900 mb-6">
                {decodeURIComponent(params.location)} Branch
            </h1>
            {/* Add branch specific content */}
        </div>
    );
}