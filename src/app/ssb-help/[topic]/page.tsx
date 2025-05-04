export const dynamic = 'force-dynamic';


export default function SSBHelpPage({ params }: { params: { topic: string } }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-red-900 mb-6">
                {decodeURIComponent(params.topic).replace(/-/g, ' ')}
            </h1>
            {/* Add SSB help topic specific content */}
        </div>
    )
}