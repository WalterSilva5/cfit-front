import { AppAPIService } from '../AppAPIService'
const api = new AppAPIService()

export async function getOne (id: number) {
  const config = {
    url: '/test/' + id,
    method: 'GET'
  }

  return await api.makeHttpRequest(config)
}

export async function createOne (data: any) {
  const config = {
    url: '/test',
    method: 'POST',
    data
  }

  return await api.makeHttpRequest(config)
}

export async function getByOsId (
  osId: number,
  page = '1',
  perPage = '8',
  order = 'desc'
) {
  const pageNumber = parseInt(page)
  const perPageNumber = parseInt(perPage)
  const config = {
    url: `/test/os/${osId}/all`,
    method: 'GET',
    params: {
      page: pageNumber,
      perPage: perPageNumber,
      order
    }
  }

  return await api.makeHttpRequest(config)
}

export async function getTestPdf (id: number, osId: number) {
  const config = {
    url: `/test/pdf-desktop?executionTestId=${id}&osId=${osId}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/pdf',
      'Access-Control-Expose-Headers': 'Content-Disposition',
      'Content-Disposition': 'attachment; filename="document.pdf"'
    },
    responseType: 'arraybuffer'
  }

  return await api.makeHttpRequest(config)
}
