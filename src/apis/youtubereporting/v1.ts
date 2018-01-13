/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {createAPIRequest} from '../../lib/apirequest';

/**
 * YouTube Reporting API
 *
 * Schedules reporting jobs containing your YouTube Analytics data and downloads
 * the resulting bulk data reports in the form of CSV files.
 *
 * @example
 * const google = require('googleapis');
 * const youtubereporting = google.youtubereporting('v1');
 *
 * @namespace youtubereporting
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Youtubereporting
 */
function Youtubereporting(options) {
  const self = this;
  self._options = options || {};
  self.jobs = {
    /**
     * youtubereporting.jobs.create
     * @desc Creates a job and returns it.
     * @alias youtubereporting.jobs.create
     * @memberOf! youtubereporting(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     * @param {youtubereporting(v1).Job} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl =
          options.rootUrl || 'https://youtubereporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/jobs').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * youtubereporting.jobs.delete
        * @desc Deletes a job.
        * @alias youtubereporting.jobs.delete
        * @memberOf! youtubereporting(v1)
        *
        * @param {object} params Parameters for request
        * @param {string} params.jobId The ID of the job to delete.
        * @param {string=} params.onBehalfOfContentOwner The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    delete (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl =
          options.rootUrl || 'https://youtubereporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/jobs/{jobId}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['jobId'],
        pathParams: ['jobId'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * youtubereporting.jobs.get
        * @desc Gets a job.
        * @alias youtubereporting.jobs.get
        * @memberOf! youtubereporting(v1)
        *
        * @param {object} params Parameters for request
        * @param {string} params.jobId The ID of the job to retrieve.
        * @param {string=} params.onBehalfOfContentOwner The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    get(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl =
          options.rootUrl || 'https://youtubereporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/jobs/{jobId}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['jobId'],
        pathParams: ['jobId'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * youtubereporting.jobs.list
        * @desc Lists jobs.
        * @alias youtubereporting.jobs.list
        * @memberOf! youtubereporting(v1)
        *
        * @param {object} params Parameters for request
        * @param {boolean=} params.includeSystemManaged If set to true, also system-managed jobs will be returned; otherwise only user-created jobs will be returned. System-managed jobs can neither be modified nor deleted.
        * @param {string=} params.onBehalfOfContentOwner The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
        * @param {integer=} params.pageSize Requested page size. Server may return fewer jobs than requested. If unspecified, server will pick an appropriate default.
        * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListJobs` method.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    list(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl =
          options.rootUrl || 'https://youtubereporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/jobs').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: self
      };
      return createAPIRequest(parameters, callback);
    },
    reports: {
      /**
       * youtubereporting.jobs.reports.get
       * @desc Gets the metadata of a specific report.
       * @alias youtubereporting.jobs.reports.get
       * @memberOf! youtubereporting(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.jobId The ID of the job.
       * @param {string=} params.onBehalfOfContentOwner The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
       * @param {string} params.reportId The ID of the report to retrieve.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl =
            options.rootUrl || 'https://youtubereporting.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/jobs/{jobId}/reports/{reportId}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['jobId', 'reportId'],
          pathParams: ['jobId', 'reportId'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * youtubereporting.jobs.reports.list
          * @desc Lists reports created by a specific job. Returns NOT_FOUND if
          * the job does not exist.
          * @alias youtubereporting.jobs.reports.list
          * @memberOf! youtubereporting(v1)
          *
          * @param {object} params Parameters for request
          * @param {string=} params.createdAfter If set, only reports created after the specified date/time are returned.
          * @param {string} params.jobId The ID of the job.
          * @param {string=} params.onBehalfOfContentOwner The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
          * @param {integer=} params.pageSize Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default.
          * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListReportsResponse.next_page_token returned in response to the previous call to the `ListReports` method.
          * @param {string=} params.startTimeAtOrAfter If set, only reports whose start time is greater than or equal the specified date/time are returned.
          * @param {string=} params.startTimeBefore If set, only reports whose start time is smaller than the specified date/time are returned.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      list(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl =
            options.rootUrl || 'https://youtubereporting.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/jobs/{jobId}/reports')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['jobId'],
          pathParams: ['jobId'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }

    }
  };
  self.media = {
    /**
     * youtubereporting.media.download
     * @desc Method for media download. Download is supported on the URI
     * `/v1/media/{+name}?alt=media`.
     * @alias youtubereporting.media.download
     * @memberOf! youtubereporting(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resourceName Name of the media that is being downloaded.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    download(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl =
          options.rootUrl || 'https://youtubereporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/media/{resourceName}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['resourceName'],
        pathParams: ['resourceName'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
  self.reportTypes = {
    /**
     * youtubereporting.reportTypes.list
     * @desc Lists report types.
     * @alias youtubereporting.reportTypes.list
     * @memberOf! youtubereporting(v1)
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.includeSystemManaged If set to true, also system-managed report types will be returned; otherwise only the report types that can be used to create new reporting jobs will be returned.
     * @param {string=} params.onBehalfOfContentOwner The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     * @param {integer=} params.pageSize Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListReportTypes` method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl =
          options.rootUrl || 'https://youtubereporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/reportTypes').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
}
/**
 * @typedef Empty
 * @memberOf! youtubereporting(v1)
 * @type object
 */
/**
 * @typedef GdataBlobstore2Info
 * @memberOf! youtubereporting(v1)
 * @type object
 * @property {string} blobGeneration gdata
 * @property {string} blobId gdata
 * @property {string} downloadReadHandle gdata
 * @property {string} readToken gdata
 * @property {string} uploadMetadataContainer gdata
 */
/**
 * @typedef GdataCompositeMedia
 * @memberOf! youtubereporting(v1)
 * @type object
 * @property {string} blobRef gdata
 * @property {youtubereporting(v1).GdataBlobstore2Info} blobstore2Info gdata
 * @property {string} cosmoBinaryReference gdata
 * @property {integer} crc32cHash gdata
 * @property {string} inline gdata
 * @property {string} length gdata
 * @property {string} md5Hash gdata
 * @property {youtubereporting(v1).GdataObjectId} objectId gdata
 * @property {string} path gdata
 * @property {string} referenceType gdata
 * @property {string} sha1Hash gdata
 */
/**
 * @typedef GdataContentTypeInfo
 * @memberOf! youtubereporting(v1)
 * @type object
 * @property {string} bestGuess gdata
 * @property {string} fromBytes gdata
 * @property {string} fromFileName gdata
 * @property {string} fromHeader gdata
 * @property {string} fromUrlPath gdata
 */
/**
 * @typedef GdataDiffChecksumsResponse
 * @memberOf! youtubereporting(v1)
 * @type object
 * @property {youtubereporting(v1).GdataCompositeMedia} checksumsLocation gdata
 * @property {string} chunkSizeBytes gdata
 * @property {youtubereporting(v1).GdataCompositeMedia} objectLocation gdata
 * @property {string} objectSizeBytes gdata
 * @property {string} objectVersion gdata
 */
/**
 * @typedef GdataDiffDownloadResponse
 * @memberOf! youtubereporting(v1)
 * @type object
 * @property {youtubereporting(v1).GdataCompositeMedia} objectLocation gdata
 */
/**
 * @typedef GdataDiffUploadRequest
 * @memberOf! youtubereporting(v1)
 * @type object
 * @property {youtubereporting(v1).GdataCompositeMedia} checksumsInfo gdata
 * @property {youtubereporting(v1).GdataCompositeMedia} objectInfo gdata
 * @property {string} objectVersion gdata
 */
/**
 * @typedef GdataDiffUploadResponse
 * @memberOf! youtubereporting(v1)
 * @type object
 * @property {string} objectVersion gdata
 * @property {youtubereporting(v1).GdataCompositeMedia} originalObject gdata
 */
/**
 * @typedef GdataDiffVersionResponse
 * @memberOf! youtubereporting(v1)
 * @type object
 * @property {string} objectSizeBytes gdata
 * @property {string} objectVersion gdata
 */
/**
 * @typedef GdataDownloadParameters
 * @memberOf! youtubereporting(v1)
 * @type object
 * @property {boolean} allowGzipCompression gdata
 * @property {boolean} ignoreRange gdata
 */
/**
 * @typedef GdataMedia
 * @memberOf! youtubereporting(v1)
 * @type object
 * @property {string} algorithm gdata
 * @property {string} bigstoreObjectRef gdata
 * @property {string} blobRef gdata
 * @property {youtubereporting(v1).GdataBlobstore2Info} blobstore2Info gdata
 * @property {youtubereporting(v1).GdataCompositeMedia[]} compositeMedia gdata
 * @property {string} contentType gdata
 * @property {youtubereporting(v1).GdataContentTypeInfo} contentTypeInfo gdata
 * @property {string} cosmoBinaryReference gdata
 * @property {integer} crc32cHash gdata
 * @property {youtubereporting(v1).GdataDiffChecksumsResponse} diffChecksumsResponse gdata
 * @property {youtubereporting(v1).GdataDiffDownloadResponse} diffDownloadResponse gdata
 * @property {youtubereporting(v1).GdataDiffUploadRequest} diffUploadRequest gdata
 * @property {youtubereporting(v1).GdataDiffUploadResponse} diffUploadResponse gdata
 * @property {youtubereporting(v1).GdataDiffVersionResponse} diffVersionResponse gdata
 * @property {youtubereporting(v1).GdataDownloadParameters} downloadParameters gdata
 * @property {string} filename gdata
 * @property {string} hash gdata
 * @property {boolean} hashVerified gdata
 * @property {string} inline gdata
 * @property {boolean} isPotentialRetry gdata
 * @property {string} length gdata
 * @property {string} md5Hash gdata
 * @property {string} mediaId gdata
 * @property {youtubereporting(v1).GdataObjectId} objectId gdata
 * @property {string} path gdata
 * @property {string} referenceType gdata
 * @property {string} sha1Hash gdata
 * @property {string} sha256Hash gdata
 * @property {string} timestamp gdata
 * @property {string} token gdata
 */
/**
 * @typedef GdataObjectId
 * @memberOf! youtubereporting(v1)
 * @type object
 * @property {string} bucketName gdata
 * @property {string} generation gdata
 * @property {string} objectName gdata
 */
/**
 * @typedef Job
 * @memberOf! youtubereporting(v1)
 * @type object
 * @property {string} createTime The creation date/time of the job.
 * @property {string} expireTime The date/time when this job will expire/expired. After a job expired, no new reports are generated.
 * @property {string} id The server-generated ID of the job (max. 40 characters).
 * @property {string} name The name of the job (max. 100 characters).
 * @property {string} reportTypeId The type of reports this job creates. Corresponds to the ID of a ReportType.
 * @property {boolean} systemManaged True if this a system-managed job that cannot be modified by the user; otherwise false.
 */
/**
 * @typedef ListJobsResponse
 * @memberOf! youtubereporting(v1)
 * @type object
 * @property {youtubereporting(v1).Job[]} jobs The list of jobs.
 * @property {string} nextPageToken A token to retrieve next page of results. Pass this value in the ListJobsRequest.page_token field in the subsequent call to `ListJobs` method to retrieve the next page of results.
 */
/**
 * @typedef ListReportsResponse
 * @memberOf! youtubereporting(v1)
 * @type object
 * @property {string} nextPageToken A token to retrieve next page of results. Pass this value in the ListReportsRequest.page_token field in the subsequent call to `ListReports` method to retrieve the next page of results.
 * @property {youtubereporting(v1).Report[]} reports The list of report types.
 */
/**
 * @typedef ListReportTypesResponse
 * @memberOf! youtubereporting(v1)
 * @type object
 * @property {string} nextPageToken A token to retrieve next page of results. Pass this value in the ListReportTypesRequest.page_token field in the subsequent call to `ListReportTypes` method to retrieve the next page of results.
 * @property {youtubereporting(v1).ReportType[]} reportTypes The list of report types.
 */
/**
 * @typedef Report
 * @memberOf! youtubereporting(v1)
 * @type object
 * @property {string} createTime The date/time when this report was created.
 * @property {string} downloadUrl The URL from which the report can be downloaded (max. 1000 characters).
 * @property {string} endTime The end of the time period that the report instance covers. The value is exclusive.
 * @property {string} id The server-generated ID of the report.
 * @property {string} jobExpireTime The date/time when the job this report belongs to will expire/expired.
 * @property {string} jobId The ID of the job that created this report.
 * @property {string} startTime The start of the time period that the report instance covers. The value is inclusive.
 */
/**
 * @typedef ReportType
 * @memberOf! youtubereporting(v1)
 * @type object
 * @property {string} deprecateTime The date/time when this report type was/will be deprecated.
 * @property {string} id The ID of the report type (max. 100 characters).
 * @property {string} name The name of the report type (max. 100 characters).
 * @property {boolean} systemManaged True if this a system-managed report type; otherwise false. Reporting jobs for system-managed report types are created automatically and can thus not be used in the `CreateJob` method.
 */

export = Youtubereporting;